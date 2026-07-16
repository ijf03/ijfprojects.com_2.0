export type EducationType =
  | "Degree"
  | "Certificate"
  | "Course"
  | "Workshop";

export interface Education {
  course: string;
  school: string;
  period: string;
  type: EducationType;
  description: string;
  skills: string[];
}
