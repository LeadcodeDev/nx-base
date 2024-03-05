import { ReactElement } from 'react';

export type RouterProps = {
  path: string
  component: ReactElement
  protected: boolean
  darkMode?: boolean
}
