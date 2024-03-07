import { ReactElement, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  title: ReactNode
  backLink: string
}
export function BackofficeResourceHeading(props: Props): ReactElement {
  return (
    <div>
      <Link to={props.backLink} className="flex items-center gap-x-2 pb-3">
        <span className="i-radix-icons:arrow-left w-1.5em h-1.5em"></span>
        <span className="font-medium">Back</span>
      </Link>
      <div className="bg-white border border-gray-200 rounded-md w-full flex flex-col justify-center p-5">
        <h1 className="text-4xl">{props.title}</h1>
      </div>
    </div>
  )
}
