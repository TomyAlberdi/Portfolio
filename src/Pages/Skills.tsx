import BackendContent from "@/components/Skills/BackendContent";
import DatabaseContent from "@/components/Skills/DatabaseContent";
import DevOpsContent from "@/components/Skills/DevOpsContent";
import FrontendContent from "@/components/Skills/FrontendContent";
import SoftSkillsContent from "@/components/Skills/SoftSkillsContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <Card id="skills" className="w-full pb-2">
      <CardHeader>
        <CardTitle>{t("Stack")}</CardTitle>
      </CardHeader>
      <CardContent className="px-2">
        <Tabs defaultValue="backend">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="backend" triggerName="Backend">
              Backend
            </TabsTrigger>
            <TabsTrigger value="frontend" triggerName="Frontend">
              Frontend
            </TabsTrigger>
            <TabsTrigger value="databases" triggerName="Databases">
              Databases
            </TabsTrigger>
            <TabsTrigger value="devops" triggerName="DevOps">
              DevOps
            </TabsTrigger>
            <TabsTrigger value="soft" triggerName="Soft Skills">
              Soft Skills
            </TabsTrigger>
          </TabsList>
          <TabsContent value="backend">
            <Card className="text-foreground h-[50vh] bg-rose-950 md:p-2 pb-2">
              <CardHeader className="md:hidden">
                <CardTitle>Backend</CardTitle>
              </CardHeader>
              <BackendContent />
            </Card>
          </TabsContent>
          <TabsContent value="frontend">
            <Card className="text-foreground h-[50vh] bg-sky-950">
              <CardHeader className="md:hidden">
                <CardTitle>Frontend</CardTitle>
              </CardHeader>
              <FrontendContent />
            </Card>
          </TabsContent>
          <TabsContent value="databases">
            <Card className="text-foreground h-[50vh] bg-teal-950">
              <CardHeader className="md:hidden">
                <CardTitle>Databases</CardTitle>
              </CardHeader>
              <DatabaseContent />
            </Card>
          </TabsContent>
          <TabsContent value="devops">
            <Card className="text-foreground h-[50vh] bg-indigo-950">
              <CardHeader className="md:hidden">
                <CardTitle>DevOps</CardTitle>
              </CardHeader>
              <DevOpsContent />
            </Card>
          </TabsContent>
          <TabsContent value="soft">
            <Card className="text-foreground h-[50vh] bg-yellow-950">
              <CardHeader className="md:hidden">
                <CardTitle>Soft Skills</CardTitle>
              </CardHeader>
              <SoftSkillsContent />
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
export default Skills;
