export type SelectValue = string | number | object

export interface SelectOption {
  // NOTE: I'd expect it should have value kinda field so that it can be used when item is selected
  value: SelectValue
  icon?: string
  title: string
  subTitle?: string
}
