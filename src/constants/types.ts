import type { Field, TableName } from '@/constants/globals'
import type { Setting, Log, Example, ExampleRecord, Test, TestRecord } from '@/models/models'

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//     App Types                                                             //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

/**
 * Generic type for an object with string based properties storing any value.
 */
export type AppObject = { [x: string]: any }

export type ParentCardItem = {
  id: string
  name: string
  favorite: boolean
  previousTimestamp?: number
}

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//     Model Types                                                           //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

export type ParentTable = TableName.EXAMPLES | TableName.TESTS

export type RecordTable = TableName.EXAMPLE_RECORDS | TableName.TEST_RECORDS

export type AnyModel = Setting | Log | Example | ExampleRecord | Test | TestRecord

export type ParentModel = Example | Test

export type RecordModel = ExampleRecord | TestRecord

export type SettingValue = any // May make this more specific later

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//     Report Types                                                          //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

export type GeneratedReport = {
  title: string
  firstRecordDate: string
  lastRecordDate: string
  chartLabels: string[]
  chartDatasets: ChartDataset[]
}

export type ReportChart = {
  options: ChartOptions
  firstRecordDate: string
  lastRecordDate: string
  chartData: ChartData
}

export type ChartOptions = {
  responsive: boolean
  radius: number
  plugins: { [x: string]: any }
}

export type ChartData = {
  labels: string[]
  datasets: ChartDataset[]
}

export type ChartDataset = {
  label: string
  borderColor: string
  data: (number | null)[]
}

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//     Router Types                                                          //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

/**
 *
 */

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//     Table Types                                                           //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

/**
 * Properties used to display data items in a QTable.
 * Use "hidden_id" for column "0" so a truncated version can be shown.
 */
export type ColumnProps = {
  name: Field | 'hidden_id'
  label: string
  align: string
  sortable: boolean
  required: boolean
  field: (val: any) => any
  format: (val: any) => any
}

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//     Utility Types                                                         //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

/**
 *
 */
