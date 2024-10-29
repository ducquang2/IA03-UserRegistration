import { useNavigate } from "react-router-dom";

type ErrorPageProps = {
  status?: number;
  message?: string
}

function ErrorPage(props: ErrorPageProps) {
  const { status = 404, message = 'Page not found' } = props
  const navigate = useNavigate()

  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center gap-8">
      <div className="flex justify-center items-center gap-2">
        <p className="h-3 mb-0">{status}</p>
        <p className="h-3 mb-0">{message}</p>
      </div>

      <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => navigate('/')}>
        Back to home
      </button>
    </div>
  )
}

export default ErrorPage