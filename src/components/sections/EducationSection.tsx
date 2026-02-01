import { GraduationCap } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const EducationSection = () => {
  const education = [
    {
      degree: "Software Engineering (BSSE)",
      institution: "Department of Computer Science - UBIT University of Karachi",
      year: "Expected 2026",
      grade: "Currently enrolled in sixth semester"
    },
    {
      degree: "Intermediate",
      institution: "Aga Khan Higher Secondary School, Karachi",
      year: "2022",
      grade: "A-1 Grade"
    },
    {
      degree: "Matriculation",
      institution: "Blue Horizon School, Karachi",
      year: "2020",
      grade: "A-1 Grade"
    }
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container-tight">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <span className="text-accent font-medium tracking-wide uppercase text-sm">
              Education
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground">
              Academic <span className="text-gradient">Background</span>
            </h2>
          </div>

          {/* Education Table */}
          <div className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary hover:bg-primary">
                  <TableHead className="text-primary-foreground font-semibold">Degree</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Institute Name</TableHead>
                  <TableHead className="text-primary-foreground font-semibold text-center">Passing Year</TableHead>
                  <TableHead className="text-primary-foreground font-semibold text-center">Grade</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {education.map((edu, index) => (
                  <TableRow key={index} className="hover:bg-secondary/50">
                    <TableCell className="font-medium text-foreground">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-accent hidden sm:block" />
                        {edu.degree}
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{edu.institution}</TableCell>
                    <TableCell className="text-center text-muted-foreground">{edu.year}</TableCell>
                    <TableCell className="text-center">
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                        {edu.grade}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
