import { useScrollAnimation } from "@/hooks";
import { SkillCategory } from "@/sections/SkillsSection/components/SkillCategory";
import { SkillsHeader } from "@/sections/SkillsSection/components/SkillsHeader";
import { staggerContainer } from "@/utils/animation-variants";
import { motion } from "framer-motion";

export const SkillsSection = () => {
  const { ref, isInView } = useScrollAnimation({ amount: 0.1 });

  return (
    <section id="skills" className="relative bg-gray-950 box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] overflow-hidden px-6 py-32 md:px-8">
      <div className="absolute bg-[linear-gradient(rgba(0,0,0,0)_0%,oklab(0.381_0.100917_-0.144194_/_0.05)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] inset-0"></div>
      <div ref={ref} className="relative box-border caret-transparent max-w-screen-xl outline-[oklab(0.708_0_0_/_0.5)] mx-auto">
        <SkillsHeader />
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="box-border caret-transparent gap-x-6 grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[oklab(0.708_0_0_/_0.5)] gap-y-6 md:grid-cols-[repeat(12,minmax(0px,1fr))]"
        >
          <SkillCategory
            title="Mobile Development"
            skills={["Kotlin", "Java", "Dart", "Flutter", "Jetpack Compose", "Material Design"]}
            colSpan="md:col-span-6"
            variant="cyan"
          />
          <SkillCategory
            title="Architecture"
            skills={["MVVM", "MVI", "Clean Architecture", "Modular Design", "Dependency Injection"]}
            colSpan="md:col-span-6"
            variant="purple"
          />
          <SkillCategory
            title="Backend & APIs"
            skills={["REST", "GraphQL", "Firebase", "Retrofit", "Ktor", "WebSockets"]}
            colSpan="md:col-span-4"
            variant="blue"
          />
          <SkillCategory
            title="Database"
            skills={["Room", "SQLite", "Realm", "Firestore", "Hive"]}
            colSpan="md:col-span-4"
            variant="green"
          />
          <SkillCategory
            title="Machine Learning"
            skills={["TensorFlow Lite", "ML Kit", "Core ML", "ONNX"]}
            colSpan="md:col-span-4"
            variant="orange"
          />
          <SkillCategory
            title="Tools & DevOps"
            skills={["Git", "GitHub Actions", "Fastlane", "Gradle", "Docker", "CI/CD"]}
            colSpan="md:col-span-6"
            variant="pink"
          />
          <SkillCategory
            title="Testing"
            skills={["JUnit", "Espresso", "Mockito", "UI Testing", "Integration Tests"]}
            colSpan="md:col-span-6"
            variant="teal"
          />
        </motion.div>
      </div>
    </section>
  );
};
