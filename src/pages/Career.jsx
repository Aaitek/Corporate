import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Career = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect to company page with careers section hash
    navigate('/company#careers', { replace: true })
  }, [navigate])

  return null
}

export default Career

