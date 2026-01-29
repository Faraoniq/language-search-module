import LanguageSupportChecker from './components/LanguageSupportChecker'

function App() {
  return (
    <div style={{
      padding: '40px',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0a0a0a'
    }}>
      <LanguageSupportChecker />
    </div>
  )
}

export default App
