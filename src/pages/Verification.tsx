import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, Mail, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Verification = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"email" | "code" | "success">("email");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.endsWith(".edu")) {
      toast({
        title: "Invalid Email",
        description: "Please use a valid college email address (.edu)",
        variant: "destructive",
      });
      return;
    }
    // Simulate sending verification code
    toast({
      title: "Verification Code Sent",
      description: "Please check your email for the verification code",
    });
    setStep("code");
  };

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length !== 6) {
      toast({
        title: "Invalid Code",
        description: "Please enter a valid 6-digit code",
        variant: "destructive",
      });
      return;
    }
    // Simulate code verification
    setStep("success");
  };

  const handleComplete = () => {
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/20 via-background to-background p-6">
      <div className="max-w-md mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              College Verification
            </CardTitle>
            <CardDescription>
              Verify your college email to access all features
            </CardDescription>
          </CardHeader>
          <CardContent>
            {step === "email" && (
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    College Email
                  </label>
                  <div className="flex gap-2">
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.name@college.edu"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Button type="submit" className="whitespace-nowrap">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Code
                    </Button>
                  </div>
                </div>
              </form>
            )}

            {step === "code" && (
              <form onSubmit={handleCodeSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="code" className="text-sm font-medium">
                    Verification Code
                  </label>
                  <Input
                    id="code"
                    type="text"
                    placeholder="Enter 6-digit code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    maxLength={6}
                    required
                  />
                  <Button type="submit" className="w-full">
                    Verify Code
                  </Button>
                </div>
              </form>
            )}

            {step === "success" && (
              <div className="text-center space-y-4">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                <h3 className="text-xl font-semibold">Verification Complete!</h3>
                <p className="text-muted-foreground">
                  Your college email has been verified. You now have full access to
                  all features.
                </p>
                <Button onClick={handleComplete} className="w-full">
                  Continue to Profile
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Why do I need to verify my email?</AccordionTrigger>
                <AccordionContent>
                  Email verification helps ensure that only current college students
                  can access the platform, creating a safer and more authentic
                  community for everyone.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What email address should I use?</AccordionTrigger>
                <AccordionContent>
                  Use your official college email address that ends with .edu. This
                  confirms your current student status at your institution.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How long does verification take?
                </AccordionTrigger>
                <AccordionContent>
                  The verification process typically takes just a few minutes. You'll
                  receive a verification code instantly, and once entered, you'll
                  have immediate access.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Verification;