import type { LogRetention } from '@/types/misc'

/**
 * All database types that separate the different types of records.
 * Using compound indices instead of splitting records by table.
 * NOTE: The order here determines the order when retrieving these types.
 */
export enum DatabaseType {
  LOG = 'Logs', // First in order
  SETTING = 'Settings',
  EXAMPLE = 'Examples',
  EXAMPLE_RESULT = 'Example Results',
  TEST = 'Tests',
  TEST_RESULT = 'Test Results',
}

/**
 * Parent types in the database.
 */
export type DatabaseParentType = DatabaseType.EXAMPLE | DatabaseType.TEST

/**
 * Child types to parent types in the database.
 */
export type DatabaseChildType = DatabaseType.EXAMPLE_RESULT | DatabaseType.TEST_RESULT

/**
 * Each database type has a category. These determine how certain parts of the app treat them.
 */
export enum DatabaseCategory {
  INTERNAL = 'Internal',
  PARENT = 'Parent',
  CHILD = 'Child',
}

/**
 * All field names used by database records.
 * Update database models and database constants when adding new fields.
 */
export enum DatabaseField {
  // All
  TYPE = 'type',
  ID = 'id',
  // Settings
  VALUE = 'value',
  // Logs
  CREATED_TIMESTAMP = 'createdTimestamp',
  SEVERITY = 'severity',
  LABEL = 'label',
  DETAILS = 'details',
  // Examples
  NAME = 'name',
  DESCRIPTION = 'description',
  IS_FAVORITED = 'isFavorited',
  IS_ENABLED = 'isEnabled',
  // Example Results
  PARENT_ID = 'parentId',
  NOTE = 'note',
  NUMBER = 'number',
}

/**
 * Setting values are restricted to a few primitive types.
 */
export type SettingValue = string | number | boolean | DatabaseType | LogRetention

/**
 * The only valid setting ids.
 */
export enum SettingId {
  SHOW_INTRODUCTION = 'show-introduction',
  DARK_MODE = 'dark-mode',
  SHOW_ALL_DATA_COLUMNS = 'show-all-data-columns',
  SHOW_CONSOLE_LOGS = 'show-console-logs',
  SHOW_INFO_MESSAGES = 'show-info-messages',
  LOG_RETENTION_TIME = 'log-retention-time',
}

/**
 * Log severity levels.
 */
export enum Severity {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

/**
 * Actions that a database type can support. Used for action and routing controls.
 */
export enum DatabaseAction {
  INSPECT = 'Inspect',
  CREATE = 'Create',
  EDIT = 'Edit',
  DELETE = 'Delete',
  CHARTS = 'Charts',
}

/**
 * Record issues for record curing.
 * Unknown: Unknown issue caused the record to get selected.
 * Unused: Parent record with no child records.
 * Orphaned: Child record with no parent record.
 * Partial: Parent or child record with missing required data.
 */
export enum RecordIssue {
  UNKNOWN = 'Unknown',
  UNUSED = 'Unused',
  ORPHANED = 'Orphaned',
  PARTIAL = 'Partial',
}
