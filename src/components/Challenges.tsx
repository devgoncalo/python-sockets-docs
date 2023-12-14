import { Books } from '@phosphor-icons/react'
import { ReactNode } from 'react'

export default function Checks({ children }: { children: ReactNode }) {
  return (
    <div className="my-4 flex gap-2.5 rounded-2xl border border-orange-500 bg-orange-50/50 p-4 leading-6 text-orange-900 dark:border-orange-500/30 dark:bg-orange-500/5 dark:text-orange-200 dark:[--tw-prose-links:theme(colors.white)] dark:[--tw-prose-links-hover:theme(colors.orange.300)]">
      <Books className="mt-0.5 h-5 w-5 flex-none fill-orange-500 stroke-white dark:fill-orange-500 dark:stroke-orange-200" />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        <p>{children}</p>
      </div>
    </div>
  )
}
