import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const meta = {
  title: "UI/Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your credentials to sign in.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Sign In</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Check your inbox for the latest updates.
        </p>
      </CardContent>
    </Card>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[350px]">
      <Card>
        <CardHeader>
          <CardTitle>New Feature</CardTitle>
          <CardAction>
            <Badge>New</Badge>
          </CardAction>
          <CardDescription>
            Introducing our latest update to improve your workflow.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This feature is now available for all users. Try it out and let us
            know what you think.
          </p>
        </CardContent>
        <CardFooter>
          <Button size="sm">Learn more</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Security Alert</CardTitle>
          <CardAction>
            <Badge variant="destructive">Critical</Badge>
          </CardAction>
          <CardDescription>
            Unusual sign-in activity detected on your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            We noticed a login from an unrecognized device. Please review your
            recent activity and update your password if needed.
          </p>
        </CardContent>
        <CardFooter className="gap-2">
          <Button size="sm" variant="destructive">
            Secure account
          </Button>
          <Button size="sm" variant="outline">
            Dismiss
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pro Plan</CardTitle>
          <CardAction>
            <Badge variant="secondary">Popular</Badge>
          </CardAction>
          <CardDescription>
            Everything you need to scale your projects.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Unlimited projects, priority support, and advanced analytics
            included.
          </p>
        </CardContent>
        <CardFooter>
          <Button size="sm" className="w-full">
            Upgrade now
          </Button>
        </CardFooter>
      </Card>
    </div>
  ),
};
