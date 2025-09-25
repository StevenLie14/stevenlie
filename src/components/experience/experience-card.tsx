import {Building2} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import React from "react";

interface IProps {
  experience: Experience
}

export const ExperienceCard = ({ experience }: IProps) => {
  return (
    <div key={experience.position} className="flex justify-start gap-6 first:pt-20">
      <div className="sticky flex flex-row items-center self-start max-w-xs z-10">
        <div className="h-10 w-10 absolute left-3 rounded-full flex items-center justify-center neon-glow">
          <div className="h-4 w-4 rounded-full bg-blue-500 border border-primary p-2" />
        </div>
      </div>

      <div className="relative pl-6 pr-4 pt-4 w-full">
        <h3 className="text-xl mb-2 text-left text-primary font-bold">{experience.position}</h3>
        <div className="flex items-center gap-2 text-muted-foreground mb-2 flex-wrap">
          <Building2 className="w-4 h-4" />
          <span className="font-medium">{experience.company}</span>
          <span>-</span>
          <span>{experience.location}</span>
        </div>
        <span className="text-sm text-muted-foreground mb-4 block">{experience.title}</span>

        <Card className="flex-1 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:neon-glow">
          <CardContent>
            <p className="text-muted-foreground mb-2 leading-relaxed">{experience.description}</p>

            {experience.achievements && experience.achievements.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-accent">Key Achievements:</h4>
                <ul className="space-y-2">
                  {experience.achievements.map((ach) => (
                    <li key={ach} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                      <span className="break-all">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {experience.skills && experience.skills.length > 0 && (
              <div className="mt-2">
                <h4 className="font-medium text-sm text-accent">Skills:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {experience.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-primary/20 text-primary border-primary/30 glow-border-blue hover-glow-blue text-xs transition-all duration-300 pointer-events-auto cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}