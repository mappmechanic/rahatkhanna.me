import MyLogo from '@/app/svgs/logo.svg'; // Import the SVG file

export function Logo() {
  return (
    <div className="logo-container" style={{ display: 'flex', justifyContent: 'left' }}>
      <MyLogo height="50" />
    </div>
  );
}
