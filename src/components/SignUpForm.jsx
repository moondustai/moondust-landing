import { useId } from 'react'

import { PopupButton } from '@typeform/embed-react'

export function SignUpForm() {
  let id = useId()

  return (
    <PopupButton id="<form-id>" className="mt-8 group relative isolate flex-none rounded-md py-1.5 text-[0.8125rem]/6 font-semibold text-white pl-2.5 pr-[calc(9/16*1rem)]">
      <span class="absolute inset-0 rounded-md bg-gradient-to-b from-white/80 to-white opacity-10 transition-opacity group-hover:opacity-15"></span>
      <span class="absolute inset-0 rounded-md opacity-7.5 shadow-[inset_0_1px_1px_white] transition-opacity group-hover:opacity-10"></span>
      Sign up for early access
    </PopupButton>
  )
}
