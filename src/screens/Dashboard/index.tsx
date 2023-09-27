import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Container, Header, HeaderText, DebtsCards } from './styles';
import { DebtsCard } from "../../components/DebtsCards";
import { useFetch } from '../../hooks/useFetch';

type Client = {
  id: number;
  nome: string;
  cpf: string;
  email: string;
};

type Debt = {
  cliente: Client;
  id: number;
  ultimaAlteracao: string;
  criadoEm: string;
  valor: number;
  dataPagamento: string;
  descricao: string;
};

type DebtSummary = {
  title: string;
  amount: string;
  total: string;
};

function calculateDebtSummary(debts: Debt[]): DebtSummary[] {
  let totalDebts = 0;
  let totalDebtAmount = 0;
  let totalPaidDebts = 0;
  let totalUnpaidDebts = 0;
  let totalPaidAmount = 0;
  let totalUnpaidAmount = 0;

  if (debts) {
    debts.forEach((debt) => {
      totalDebts++;
      if (debt.dataPagamento) {
        totalPaidDebts++;
        totalPaidAmount += debt.valor;
      } else {
        totalUnpaidDebts++;
        totalUnpaidAmount += debt.valor;
      }
      totalDebtAmount += debt.valor;
    });
  }

  return [
    {
      title: "Dívidas em aberto",
      amount: totalUnpaidDebts.toString(),
      total: totalUnpaidAmount.toString(),
    },
    {
      title: "Dívidas pagas",
      amount: totalPaidDebts.toString(),
      total: totalPaidAmount.toString(),
    },
    {
      title: "Dívidas cadastradas",
      amount: totalDebts.toString(),
      total: totalDebtAmount.toString(),
    },
  ];
}

export function Dashboard() {
  const { data: debtsClients, isFetching: isFetchingDebts } = useFetch<Debt[]>('api/Divida/GetOData?%24count=true');
  const [debtSummary, setDebtSummary] = useState<DebtSummary[]>([]);

  useEffect(() => {
    if (debtsClients !== null) {
      setDebtSummary(calculateDebtSummary(debtsClients));
    }
  }, [debtsClients]);

  return (
    <Container>
      <Header>
        <HeaderText>Resumo de dívidas</HeaderText>
      </Header>
      <DebtsCards>
        {debtSummary.map((summary, index) => (
          <DebtsCard key={index} data={summary} />
        ))}
      </DebtsCards>
      <StatusBar style="auto" />
    </Container>
  );
}
