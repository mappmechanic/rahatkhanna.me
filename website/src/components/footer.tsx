import SocialIcons from "./layout/social-icons";

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-indigo-900 p-4 flex justify-between items-center">
      <div className="text-white inline">Made with ❤️ using <a href="https://www.cursor.com/"><img src="https://mintlify.s3-us-west-1.amazonaws.com/cursor/images/logo/app-logo.svg" style={{ height: '25px' }} className="inline" /></a></div>
      <SocialIcons />
    </footer>
  );
}
