"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Mail, Download, Check, Info, ArrowUpRight, CloudDownload } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/button"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowPasswordModal(false)
    setShowSuccessModal(true)
  }

  const invoices = [
    { id: "#007", date: "Dec 1, 2024", amount: "£60.00", plan: "Basic plan", status: "Paid" },
    { id: "#006", date: "Nov 1, 2024", amount: "£60.00", plan: "Basic plan", status: "Paid" },
    { id: "#005", date: "Oct 1, 2024", amount: "£60.00", plan: "Basic plan", status: "Paid" },
    { id: "#004", date: "Sep 1, 2024", amount: "£60.00", plan: "Basic plan", status: "Paid" },
    { id: "#003", date: "Aug 1, 2024", amount: "£60.00", plan: "Basic plan", status: "Paid" },
    { id: "#002", date: "Jul 1, 2024", amount: "£60.00", plan: "Basic plan", status: "Paid" },
    { id: "#001", date: "Jun 1, 2024", amount: "£60.00", plan: "Basic plan", status: "Paid" },
  ]

  return (
    <div className="container w-full h-full px-4 py-6">
      <div className="w-full p-6 bg-white dark:bg-transparent rounded-md shadow-sm">
        <h1 className="text-2xl font-medium mb-4">Settings</h1>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="flex gap-5 w-fit mb-8">
            <TabsTrigger value="profile" className={`${activeTab === "profile" ? "!bg-[#E1DFFF] !text-purple-600" : "text-[#878787]"} w-fit`}>
              Profile
            </TabsTrigger>
            <TabsTrigger value="password" className={`${activeTab === "password" ? "!bg-[#E1DFFF] !text-purple-600 " : "text-[#878787]"} w-fit`}>
              Password
            </TabsTrigger>
            <TabsTrigger value="billing" className={`${activeTab === "billing" ? "!bg-[#E1DFFF] !text-purple-600 " : "text-[#878787]"} w-fit`}>
              Billing
            </TabsTrigger>
            <TabsTrigger value="account-deletion" className={`${activeTab === "account-deletion" ? "!bg-[#E1DFFF] !text-purple-600 " : "text-[#878787]"} w-fit`}>
              Account Deletion
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="flex flex-col gap-8">
            <div className="mb-2">
              <h2 className="text-lg font-medium">Profile</h2>
              <p className="text-sm text-[#878787]">Update your photo and personal details here</p>
            </div>

            <div className="flex flex-col gap-6 w-full max-w-[55rem]">
              <div className="flex justify-between gap-6">
                <label htmlFor="name" className="text-sm text-[#344054] dark:text-[#878787] font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="First and Last Name"
                  value={name}
                  className="w-full md:w-[32rem]"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex justify-between gap-6">
                <div>
                  <label className="text-sm text-[#344054] dark:text-[#878787] font-medium">Your email</label>
                  <p className="text-xs text-[#475467] dark:text-[#878787]/70 text-wrap">
                    Enter an email if you'd like to be contacted with new product updates
                  </p>
                </div>
                <div className="flex items-center relative">
                  <Mail className="mr-2 h-5 w-5 text-[#475467] absolute left-3" />
                  <Input
                    placeholder="you@example.com"
                    className="w-full md:w-[32rem] pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <hr />
              <div className="flex justify-between w-full">
                <div className="w-[70%]">
                  <label className="text-sm text-[#344054] dark:text-[#878787] font-medium">Your photo</label>
                  <p className="text-xs text-[#475467]/60 dark:text-[#878787]/70 text-wrap">This will be displayed on your profile.</p>
                </div>
                <div className="flex w-full justify-between">
                  <div className="w-28 h-28 rounded-full overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/1585634/pexels-photo-1585634.jpeg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex gap-8 h-full items-start">
                    <button className="text-[#475467] dark:text-[#878787] font-semibold">
                      Delete
                    </button>
                    <button className="text-gradient-primary font-semibold">
                      Update
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="px-8 py-2">Save</Button>
              </div>
            </div>
          </TabsContent>

          {/* Password Tab */}
          <TabsContent value="password" className="text-[#1E1E1E] flex flex-col gap-5">
            <div>
              <h2 className="text-lg font-medium dark:text-[#878787]">Password</h2>
              <p className="text-sm text-[#878787] dark:text-[#878787]/70">Update your account password here</p>
            </div>

            <hr />

            <div className="flex flex-col w-full max-w-[55rem] gap-5">
              <div className="flex">
                <label htmlFor="current-password" className="text-sm text-[#344054] dark:text-[#878787] font-medium w-full">
                  Current Password
                </label>
                <Input id="current-password" className="dark:text-[#878787]" placeholder="*****" type="password" />
              </div>

              <div className="flex">
                <label htmlFor="new-password" className="text-sm text-[#344054] dark:text-[#878787] font-medium w-full">
                  New Password
                </label>
                <Input id="new-password" type="password" className="dark:text-[#878787]" placeholder="*****" />
              </div>

              <div className="flex">
                <label htmlFor="confirm-password" className="text-sm text-[#344054] dark:text-[#878787] font-medium w-full">
                  Confirm Password
                </label>
                <Input id="confirm-password" type="password" className="dark:text-[#878787]" placeholder="*****" />
              </div>

              <div className="flex justify-end">
                {/* Removed the Popover and now opening a centered Dialog */}
                <Button className="bg-primary px-8 py-2" onClick={() => setShowPasswordModal(true)}>
                  Update
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing" className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg text-[#101828] dark:text-[#878787] font-semibold">Billing & Plans</h2>
              <p className="text-sm text-[#475467] dark:text-[#878787]/70">Manage your billing and payment details</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-4">
                        <span className="text-lg font-medium">Pro</span>
                        <Badge className="bg-[#E1DFFF] text-purple-600 hover:bg-primary/20">Monthly</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Our most popular plan</p>
                    </div>
                    <div className="flex items-end">
                      <div className="flex items-center gap-1">
                        <span className="text-4xl font-bold">£</span>
                        <span className="text-5xl font-bold">39</span>
                      </div>
                      <span className="text-sm text-muted-foreground">/per month</span>
                    </div>
                  </div>

                  <div className="w-full flex flex-col gap-4">
                    <div className="w-full">
                      <p className="text-sm font-medium">Up to 500 credits per month</p>
                      <div className="w-full h-2 bg-primary/20 rounded-full mt-2">
                        <div className="h-2 bg-primary rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center">
                      <button className="text-gradient-primary text-sm font-semibold hover:bg-primary/10">
                        Cancel Plan
                      </button>
                      <button className="text-gradient-primary flex gap-2 items-center text-sm font-semibold">
                        Upgrade plan <ArrowUpRight size={23} className="text-purple-600" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 flex flex-col gap-6 w-full h-full">
                  <div className="flex flex-col">
                    <h3 className="text-lg font-medium">Payment method</h3>
                    <p className="text-xs text-muted-foreground mt-1">Change how you pay for your plan.</p>
                  </div>

                  <div className="flex items-start gap-4 border h-full p-4 rounded-md">
                    <div className="bg-white border rounded w-12 h-8 flex items-center justify-center">
                      <img className="w-full h-full object-cover" src="https://download.logo.wine/logo/Visa_Inc./Visa_Inc.-Logo.wine.png" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-[#344054] dark:text-[#878787] font-medium">Visa ending in 1234</p>
                      <p className="text-xs text-[#475467] dark:text-[#878787]/80">Expiry 06/2024</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Mail className="h-3 w-3 text-[#475467] dark:text-[#878787]/80" />
                        <span className="text-xs text-[#475467] dark:text-[#878787]/80">billing@acme.com</span>
                      </div>
                    </div>
                    <button className="text-xs font-semibold text-[#344054] px-4 py-2 border rounded-md">
                      Edit
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold">Billing and invoicing</h3>
                  <p className="text-sm text-[#475467] dark:text-[#878787]/80">Pick an account plan that fits your workflow.</p>
                </div>
                <button className="gap-2 flex px-4 py-3 text-sm items-center font-semibold text-[#344054] dark:text-[#878787] rounded-md border">
                  <CloudDownload size={20} />
                  Download all
                </button>
              </div>

              <div className="border rounded-md">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[40px]">
                        <Checkbox />
                      </TableHead>
                      <TableHead>Invoice</TableHead>
                      <TableHead>Billing date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoices.map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <div className="p-2 bg-[#E1DFFF] rounded-full text-purple-600">
                              <Info size={18} />
                            </div>
                            <span>
                              Invoice {invoice.id} - {invoice.date.split(" ")[0]} {invoice.date.split(" ")[1]}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>{invoice.date}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 bg-[#ECFDF3] w-fit rounded-full px-2 py-1">
                            <Check className="h-4 w-4 text-green-500" />
                            <span className="dark:text-green-500">{invoice.status}</span>
                          </div>
                        </TableCell>
                        <TableCell>GBP {invoice.amount}</TableCell>
                        <TableCell>{invoice.plan}</TableCell>
                        <TableCell>
                          <button className="text-gradient-primary font-semibold">
                            Download
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="flex justify-end">
                <Button className="bg-primary text-primary-foreground">Update</Button>
              </div>
            </div>
          </TabsContent>

          {/* Account Deletion Tab */}
          <TabsContent value="account-deletion" className="text-[#1E1E1E] flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg text-[#101828] dark:text-[#878787] font-semibold">Account Deletion</h2>
              <p className="text-sm text-[#475467] dark:text-[#878787]/80">Delete your account</p>
            </div>

            <hr />
            <div className="flex w-full max-w-[55rem] justify-between">
              <label htmlFor="delete-password" className="w-full text-sm dark:text-[#878787] text-[#344054] font-medium">
                Password
              </label>
              <Input id="delete-password" type="password" className="w-full dark:text-[#878787]" placeholder="*****" />
            </div>
            <hr />
            <div>
              <Button className="px-8 py-2">Delete Account</Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Change Password Modal */}
        <Dialog open={showPasswordModal} onOpenChange={setShowPasswordModal}>
          <DialogContent className="sm:max-w-md text-center">
            <DialogHeader>
              <DialogTitle>Change Password Link</DialogTitle>
            </DialogHeader>
            <form onSubmit={handlePasswordSubmit}>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <label htmlFor="email-modal" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email-modal" value="jo***********om" readOnly />
                </div>
                <div className="flex justify-center">
                  <Button type="submit">Submit</Button>
                </div>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        {/* Success Modal */}
        <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
          <DialogContent className="sm:max-w-md text-center">
            <div className="flex flex-col items-center justify-center space-y-4 py-6">
              <h2 className="text-xl font-semibold">Email Sent Successfully</h2>
              <div className="rounded-full bg-green-100 p-3">
                <Check className="h-8 w-8 text-green-500" />
              </div>
              <Button onClick={() => setShowSuccessModal(false)}>Submit</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
