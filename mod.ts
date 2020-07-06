type Mapper = (item: object, index: string) => string

export const mapKeys = (obj: { [index: string]: any }, mapper: Mapper) =>
  Object.entries(obj).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [mapper(value, key)]: value,
    }),
    {}
  )

export function chunk<T>(arr: Array<T>, chunkSize: number): Array<Array<T>> {
  return arr.reduce(
    (prevVal: any, currVal: any, currIndx: number, array: Array<T>) =>
      !(currIndx % chunkSize) ? prevVal.concat([array.slice(currIndx, currIndx + chunkSize)]) : prevVal,
    []
  )
}
