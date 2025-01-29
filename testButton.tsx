import { ChevronRight, MailOpen } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

// Please Ignore This Components
// Test Button for testing Colors and Themes
export default function TestButton() {
  return (
    <div className="flex justify-between items-center flex-wrap gap-6 p-12">
      <Button variant="default">Default</Button>
      <Button variant="default">
        <MailOpen />
        Mail
      </Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button size="default">Size Default</Button>
      <Button size="lg">Size lg</Button>
      <Button size="sm">Size sm</Button>
      <Button size="icon">Icon</Button>
      <Button size="icon">
        <ChevronRight />
      </Button>
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
      <div>
        <div className="bg-background text-foreground border-2 p-2">
          BackFore
        </div>
        <div className="bg-primary text-primary-foreground border-2 p-2">
          Primary
        </div>
        <div className="bg-secondary text-secondary-foreground border-2 p-2">
          Secondary
        </div>
      </div>
    </div>
  );
}