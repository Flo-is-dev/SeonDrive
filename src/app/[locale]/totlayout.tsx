// ! ancien code obsolète pour raison d'incompatibilitée
// "use client";

// import { NextIntlClientProvider } from 'next-intl';
// import {getMessages} from 'next-intl/server';
// import Header from "@/components/layout/Header";
// import Lang from "@/components/layout/Lang";
// import Credits from "@/components/common/Credits";
// import Footer from "@/components/common/Footer";
// import GlobalStyles from "@/styles/GlobaleStyles";
// import styled from "styled-components";
// import Image from "next/image";

// const HeaderLayout = styled.header`
//   padding: 1rem;
//   width: 100%;
//   padding-inline: 4rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: absolute;
// `;

// const Nav = styled.nav`
//   flex: 1;
// `;

// const FooterLayout = styled.footer`
//   min-height: 350px;
//   background-color: var(--background-gray-dark);
//   position: relative;
// `;

// export default function LocaleLayout({
//   children,
//   messages,
//   params: {locale}
// }: {
//   children: React.ReactNode;
//   messages: Record<string, any>;
//   params: {locale: string};
// }) {
 
//   return (
//     <html lang={locale}>
//       <body>
//         <GlobalStyles />
//         <HeaderLayout>
//           <Nav>
//             <Header />
//           </Nav>
//           <Image
//             src="/logo-seondrive.png"
//             width={60}
//             height={60}
//             alt="SeonDrive Logo"
//           />
//           <Lang />
//         </HeaderLayout>
//         {/* Fournir la locale dynamique et les messages au NextIntlClientProvider */}
//         <NextIntlClientProvider  messages={messages} >
//           <main>{children}</main>
//         </NextIntlClientProvider>
//         <FooterLayout>
//           <Footer />
//           <Credits />
//         </FooterLayout>
//       </body>
//     </html>
//   );
// }
