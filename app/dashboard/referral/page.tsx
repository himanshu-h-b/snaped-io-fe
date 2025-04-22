import { Button } from "@/components/button";
import { Button as ShadcnButton } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { interBold, interLight, interMedium, interNormal } from "@/fonts/font";
import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";

const howItWorksSteps = [
  {
    step: 1,
    description: (
      <>
        You{" "}
        <span className={cn(interBold.className)}>
          send your invitation link
        </span>{" "}
        to your friends.
      </>
    ),
  },
  {
    step: 2,
    description: (
      <>
        <span className={cn(interBold.className)}>They subscribe</span> to a
        paid plan by using your referral link.
      </>
    ),
  },
  {
    step: 3,
    description: (
      <>
        From their first purchase, you will begin{" "}
        <span className={cn(interBold.className)}>
          earning recurring commissions
        </span>
        .
      </>
    ),
  },
];

const referralAccounts = [
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    date: "2023-08-02",
    amount: "25",
  },
  {
    name: "John Doe",
    email: "john.doe@example.com",
    date: "2023-08-02",
    amount: "25",
  },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    date: "2023-08-02",
    amount: "25",
  },
  {
    name: "Bob Williams",
    email: "bob.williams@example.com",
    date: "2023-08-02",
    amount: "25",
  },
  {
    name: "Emily Brown",
    email: "emily.brown@example.com",
    date: "2023-08-02",
    amount: "25",
  },
  {
    name: "Michael Davis",
    email: "michael.davis@example.com",
    date: "2023-08-02",
    amount: "25",
  },
  {
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    date: "2023-08-02",
    amount: "25",
  },
  {
    name: "David Lee",
    email: "david.lee@example.com",
    date: "2023-08-02",
    amount: "25",
  },
  {
    name: "Emma Taylor",
    email: "emma.taylor@example.com",
    date: "2023-08-02",
    amount: "25",
  },
  {
    name: "James Anderson",
    email: "james.anderson@example.com",
    date: "2023-08-02",
    amount: "25",
  },
];

const ReferralPage = () => {
  return (
    <div className="flex flex-col p-4 sm:p-6 md:p-8 gap-8 lg:pr-12">
      <div
        className={cn(
          "bg-background shadow rounded-lg border p-4 w-full text-[17px]",
          interNormal.className,
        )}
      >
        <div className="flex items-center justify-between flex-wrap pr-20">
          <h2 className="mr-1">Referral Program</h2>
          <div className="flex items-center gap-4">
            <h2 className="bg-custom-gradient text-gradient bg-clip-text">
              Withdraw Money
            </h2>
            <ShadcnButton variant="outline">Balance $ 200</ShadcnButton>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <div className="max-w-screen-md w-full text-foreground/90">
            <div>
              <p className={cn("text-center", interMedium.className)}>
                Invite your friend and get 25% on all their purchases.
              </p>
              <p className="mt-4 text-center">
                Invite your friends to join our platform and earn 25% of their
                purchases. Share your unique referral link, and every time they
                buy, you benefit. No limit on earnings - the more friends you
                invite, the more you gain. Start sharing and enjoy the rewards!
              </p>
            </div>
            <div className="mt-10">
              <p className={cn(interMedium.className, "text-base")}>
                How It Works?
              </p>
              <div className="mt-4 space-y-2">
                {howItWorksSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-base"
                  >
                    <p
                      className={cn(
                        "bg-primary p-1 rounded-full size-7 flex items-center justify-center",
                        interMedium.className,
                      )}
                    >
                      {step.step}
                    </p>
                    <p>{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-20 text-base">
              <p>Referral Code</p>
              <div className="mt-2 space-y-5">
                <div className="flex items-center gap-4 flex-wrap">
                  <Input placeholder="Email Address" className="sm:w-72" />
                  <Button
                    className={cn(
                      "w-full sm:w-48 py-2 text-[17px] rounded",
                      interLight.className,
                    )}
                  >
                    Send
                  </Button>
                </div>
                <div className="flex items-center gap-4 flex-wrap">
                  <Input
                    placeholder="https://snaped.io/refer/SP2121CN23"
                    className="sm:w-72"
                  />
                  <Button
                    className={cn(
                      "w-full sm:w-48 py-2 text-[17px] rounded",
                      interLight.className,
                    )}
                  >
                    <Copy className="size-4 mr-2" />
                    Copy Invite Link
                  </Button>
                </div>
              </div>
            </div>
            <Separator className="mt-12" />
            <div className="text-base">
              <p className="mt-2 mb-6">Referral Accounts</p>
              {referralAccounts.map((referral, index) => (
                <div
                  key={index}
                  className={cn(
                    "grid grid-cols-4 p-2 rounded-md gap-2 sm:gap-4",
                    index % 2 == 0 ? "bg-primary" : "bg-background",
                  )}
                >
                  <p className="overflow-hidden text-start">{referral.name}</p>
                  <p className="truncate text-center">{referral.email}</p>
                  <p className="overflow-hidden text-end">{referral.date}</p>
                  <p className="overflow-hidden text-end">{referral.amount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralPage;
