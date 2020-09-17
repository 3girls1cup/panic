import * as Yup from 'yup';

const RepositorySchema = (props) => Yup.object().shape({
  repoName: Yup.string()
    .test(
      'unique-repository-name',
      'Repository arleady exists.',
      (value) => {
        const { cosmosConfigs } = props;
        if (cosmosConfigs.length === 0) {
          return true;
        }
        for (let i = 0; i < cosmosConfigs.length; i += 1) {
          if (cosmosConfigs.repositories.length === 0) {
            return true;
          }
          for (let j = 0; j < cosmosConfigs[i].repositories.length; j += 1) {
            if (cosmosConfigs[i].repositories[j] === value) {
              return false;
            }
          }
        }
        return true;
      },
    )
    .required('Repository name is required.'),
});

export default RepositorySchema;
