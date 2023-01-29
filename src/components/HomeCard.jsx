import { useState } from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import reactLogo from '../assets/react.svg'
import './HomeCard.css'

const [count, setCount] = useState(0)

export default function HomeCard() {
  return (
    <Card>
      <Stack
        spacing={2}
        justifyContent="center"
        alignItems="center"
        paddingY={4}
      >
        <Stack direction="row">
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </Stack>
        <Typography variant="h1">Vite + React</Typography>
        <Button
          variant="contained"
          sx={{ width: '150px' }}
          onClick={() => setCount((counter) => counter + 1)}
        >
          count is
          {' '}
          {count}
        </Button>

        <Typography variant="body1">
          Edit
          {' '}
          <code>src/App.jsx</code>
          {' '}
          and save to test HMR
        </Typography>

        <Typography variant="body2">
          Click on the Vite and React logos to learn more
        </Typography>
      </Stack>
    </Card>
  )
}
