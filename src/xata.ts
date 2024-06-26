// Generated by Xata Codegen 0.29.3. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "userData",
    columns: [
      { name: "name", type: "string" },
      { name: "userId", type: "string", notNull: true, defaultValue: "null" },
      { name: "studentId", type: "string", unique: true },
      { name: "email", type: "email", unique: true },
      {
        name: "yearlevel",
        type: "string",
        notNull: true,
        defaultValue: "null",
      },
    ],
  },
  {
    name: "applicationData",
    columns: [
      { name: "userId", type: "string", notNull: true, defaultValue: "null" },
      { name: "eventId", type: "string" },
      {
        name: "status",
        type: "string",
        notNull: true,
        defaultValue: "pending",
      },
    ],
  },
  {
    name: "events",
    columns: [
      { name: "title", type: "text" },
      { name: "description", type: "text" },
      { name: "location", type: "string" },
      { name: "targetAudience", type: "string" },
      { name: "image", type: "file[]" },
      { name: "tags", type: "multiple" },
      { name: "date", type: "string" },
    ],
  },
  {
    name: "adminData",
    columns: [
      { name: "name", type: "text" },
      { name: "email", type: "email", unique: true },
      { name: "password", type: "string", unique: true },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type UserData = InferredTypes["userData"];
export type UserDataRecord = UserData & XataRecord;

export type ApplicationData = InferredTypes["applicationData"];
export type ApplicationDataRecord = ApplicationData & XataRecord;

export type Events = InferredTypes["events"];
export type EventsRecord = Events & XataRecord;

export type AdminData = InferredTypes["adminData"];
export type AdminDataRecord = AdminData & XataRecord;

export type DatabaseSchema = {
  userData: UserDataRecord;
  applicationData: ApplicationDataRecord;
  events: EventsRecord;
  adminData: AdminDataRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://ivanotch-s-workspace-jhoi6b.us-east-1.xata.sh/db/earist-org-saya",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
