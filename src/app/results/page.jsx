"use client"
import ResultsRoutines from '@/components/ResultsRoutines'
import { SessionProvider } from "next-auth/react";

const ResultsPage = () => {
  return (
    <SessionProvider>

    <ResultsRoutines/>
    </SessionProvider>
  )
}
export default ResultsPage