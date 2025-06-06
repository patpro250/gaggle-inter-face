// emails/ResetPasswordEmail.tsx
import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Link,
  Tailwind,
} from "@react-email/components";

export function ResetPasswordEmail() {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body>
          <Container className="text-center p-4">
            <Text className=" p-6 bg-gradient-to-r bg-indigo-500  ">
              Hi there,
            </Text>
            <Text>
              Click the link below to reset your Gaggle Niti password:
            </Text>
            {/* <Link href={resetLink}>{resetLink}</Link> */}
            <Text>If you didn't request this, please ignore this email.</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
