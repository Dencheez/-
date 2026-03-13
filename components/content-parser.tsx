"use client"

import React, { Fragment } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function parseContentToHtml(text: string) {
  if (!text) return null

  const lines = text.split('\n')
  const elements: React.ReactNode[] = []
  
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    
    // Check if it's a table row (contains at least one pipe)
    if (line.includes('|')) {
      const tableRows = []
      
      // Gather all consecutive table rows
      while (i < lines.length && lines[i].includes('|')) {
        // Remove leading/trailing pipes and split, trim each cell
        const rowData = lines[i]
          .split('|')
          .map(cell => cell.trim())
          .filter(cell => cell.length > 0) // filter out empties due to trailing/leading pipes

        // sometimes markdown tables have a |---|---| separator row, ignore it
        if (!rowData.every(cell => /^[-: ]+$/.test(cell))) {
          tableRows.push(rowData)
        }
        i++
      }

      if (tableRows.length > 0) {
        const headerRow = tableRows[0]
        const dataRows = tableRows.slice(1)

        elements.push(
          <div key={`table-${i}`} className="my-6 w-full overflow-x-auto rounded-lg border border-slate-200">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow>
                  {headerRow.map((h, idx) => (
                    <TableHead key={idx} className="whitespace-nowrap text-xs font-black uppercase text-slate-500 tracking-wider">
                      {h}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {dataRows.map((row, rIdx) => (
                  <TableRow key={rIdx} className="hover:bg-slate-50/50">
                    {row.map((cell, cIdx) => (
                      <TableCell key={cIdx} className="text-sm">
                        {cell}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )
      }
      continue
    }

    // Normal text line
    if (line.trim() === '') {
      elements.push(<br key={`br-${i}`} />)
    } else {
      elements.push(
        <p key={`p-${i}`} className="mb-2 text-sm leading-relaxed text-slate-700">
          {line}
        </p>
      )
    }
    i++
  }

  return <>{elements.map((el, idx) => <Fragment key={idx}>{el}</Fragment>)}</>
}
