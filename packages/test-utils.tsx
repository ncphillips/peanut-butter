import React, { FC, ReactElement } from "react"
import { render, RenderOptions } from "@testing-library/react"

const AllTheProviders: FC = ({ children }) => {
  return <>{children}</>
}

/**
 * It's often useful to define a custom render method that includes things
 * like global context providers, data stores, etc.
 *
 * See testing-library docs for reference.
 *
 * https://testing-library.com/docs/react-testing-library/setup#custom-render
 */
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from "@testing-library/react"

export { customRender as render }
