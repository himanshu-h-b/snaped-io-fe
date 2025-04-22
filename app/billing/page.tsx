"use client"

import { useState } from "react"
import { ArrowRight, ArrowUpRight, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Billing() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`min-h-screen bg-background ${darkMode ? "dark" : ""}`}>
      <div className="container flex flex-col gap-6 mx-auto px-4 py-8 space-y-6">

        {/* Header */}
        <div className="flex flex-col gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight">Billing & Plans</h1>
          <p className="text-muted-foreground">Manage your billing and payment details.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Plan Card */}
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                    <div className="flex gap-2">
                  <h3 className="text-xl font-semibold">Screening Plan</h3>
                    <Badge variant="secondary" className="bg-[#9333EA]/15 h-fit text-[#9333EA]">Monthly</Badge>
                    </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Expires in 8 days</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-bold">£50</span>
                    <span className="text-muted-foreground mb-1">per month</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Up to 100 annual hires</span>
                </div>
                <Progress value={40} className="h-2" />
              </div>

              <Separator />

              <div className="flex justify-end">
                <Button variant="ghost" className="gap-1 text-[#9333EA] font-semibold">
                  Upgrade plan <ArrowUpRight  />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Payment Method Card */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">Payment method</h3>
                <p className="text-sm text-muted-foreground">Change how you pay for your plan.</p>
              </div>

              <Card>
                <CardContent className="p-4 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-1 rounded border h-12 w-20">
                      <img src="/logos/visa.png" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-medium">Visa ending in 1234</p>
                      <p className="text-sm text-muted-foreground">Expiry 06/2024</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
        </div>

        {/* Invoices Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight">Billing and invoicing</h2>
              <p className="text-muted-foreground">Pick an account plan that fits your workflow.</p>
            </div>
            <Button variant="outline">Download all</Button>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-200 dark:bg-[#1E2529]">
                    <TableHead className=" dark:text-[#6B7280] font-semibold">Invoice</TableHead>
                    <TableHead className=" dark:text-[#6B7280] font-semibold">Billing date</TableHead>
                    <TableHead className=" dark:text-[#6B7280] font-semibold">Status</TableHead>
                    <TableHead className=" dark:text-[#6B7280] font-semibold">Amount</TableHead>
                    <TableHead className=" dark:text-[#6B7280] font-semibold">Plan</TableHead>
                    <TableHead className=" dark:text-[#6B7280] font-semibold"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { id: "007", date: "Dec 1, 2024" },
                    { id: "006", date: "Nov 1, 2024" },
                    { id: "005", date: "Oct 1, 2024" },
                    { id: "004", date: "Sep 1, 2024" },
                    { id: "003", date: "Aug 1, 2024" },
                  ].map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell>Invoice #{invoice.id} – Dec 2024</TableCell>
                      <TableCell>{invoice.date}</TableCell>
                      <TableCell>
                        <Badge
                          className="bg-green-100 text-green-600 hover:bg-green-100 dark:bg-green-900 dark:text-green-400"
                        >
                          Paid
                        </Badge>
                      </TableCell>
                      <TableCell>GBP £60.00</TableCell>
                      <TableCell>Basic plan</TableCell>
                      <TableCell className="text-right">
                        <Button variant="link" className="text-primary font-semibold text-[#9333EA]">
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}