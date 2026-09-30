import { HomePage } from '@/modules/home';
import { ThemeProvider } from '@/shared/context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}
