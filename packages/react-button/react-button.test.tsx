import React from "react"
import { render } from "test-utils"
import { Button } from "./react-button"

describe("Button", () => {
  test("clicking", () => {
    const callback = jest.fn()
    const page = render(<Button onClick={callback}>Hello World</Button>)

    page.getByText("Hello World").click()

    expect(callback).toHaveBeenCalled()
  })
})
