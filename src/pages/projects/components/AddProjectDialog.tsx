import { GenericDialog } from "@/shared";
import { GenericDialogProps } from "@/shared/components/GenericDialog";
import { useDispatch } from "react-redux";
import { Project } from "@/state/types";
import { createProject } from "@/state/slices";
import { ProjectForm } from "./ProjectForm";

export const AddProjectDialog = (props: AddProjectDialogProps) => {
  const dispatch = useDispatch();

  const handleAddProject = (project: Project) => {
    dispatch(createProject(project));
    props.onClose();
  };

  return (
    <GenericDialog
      {...props}
      dialog={{
        title: "Add Project",
        submitButton: {
          type: "submit",
          label: "Add",
          form: "project_form",
        },
      }}
    >
      <ProjectForm onSubmit={handleAddProject} />
    </GenericDialog>
  );
};

type AddProjectDialogProps = Pick<GenericDialogProps, "open" | "onClose">;
