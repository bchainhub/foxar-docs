import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import {
  useVersions,
  useLatestVersion,
} from "@docusaurus/plugin-content-docs/client";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import VersionsArchived from "@site/versionsArchived.json";

const docsPluginId = undefined;

const VersionsArchivedList = Object.entries(VersionsArchived);

function DocumentationLabel() {
  return (
    <Translate id="versionsPage.versionEntry.link">Documentation</Translate>
  );
}

function ReleaseNotesLabel() {
  return (
    <Translate id="versionsPage.versionEntry.releaseNotes">
      Release Notes
    </Translate>
  );
}

export default function Version(): JSX.Element {
  const {
    siteConfig: { organizationName, projectName },
  } = useDocusaurusContext();
  const versions = useVersions(docsPluginId);
  const latestVersion = useLatestVersion(docsPluginId);
  const currentVersion = versions.find(
    (version) => version.name === "current"
  )!;
  const pastVersions = versions.filter(
    (version) => version !== latestVersion && version.name !== "current"
  );
  const repoUrl = `https://github.com/${organizationName!}/${projectName!}`;

  return (
    <Layout
      title="Versions"
      description="CorePass Versions page listing all documented site versions"
    >
      <main className="container margin-vert--lg">
        <Heading as="h1">
          <Translate id="versionsPage.title">CorePass versions</Translate>
        </Heading>

        <div className="margin-bottom--lg">
          <Heading as="h3" id="next">
            <Translate id="versionsPage.current.title">
              Current version (Stable)
            </Translate>
          </Heading>
          <p>
            <Translate id="versionsPage.current.description">
              Here you can find the documentation for current released version.
            </Translate>
          </p>
          <table>
            <tbody>
              <tr>
                <th>{latestVersion.label}</th>
                <td>
                  <Link to={`${latestVersion.path}`}>
                    <DocumentationLabel />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {currentVersion !== latestVersion && (
          <div className="margin-bottom--lg">
            <Heading as="h3" id="latest">
              <Translate id="versionsPage.next.title">
                Next version (Unreleased)
              </Translate>
            </Heading>
            <p>
              <Translate id="versionsPage.next.description">
                Here you can find the documentation for work-in-process
                unreleased version.
              </Translate>
            </p>
            <table>
              <tbody>
                <tr>
                  <th>{currentVersion.label}</th>
                  <td>
                    <Link to={`${currentVersion.path}`}>
                      <DocumentationLabel />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {(pastVersions.length > 0 || VersionsArchivedList.length > 0) && (
          <div className="margin-bottom--lg">
            <Heading as="h3" id="archive">
              <Translate id="versionsPage.archived.title">
                Past versions (Not maintained anymore)
              </Translate>
            </Heading>
            <p>
              <Translate id="versionsPage.archived.description">
                Here you can find documentation for previous versions of
                CorePass.
              </Translate>
            </p>
            <table>
              <tbody>
                {pastVersions.map((version) => {
                  return (
                    <tr key={version.name}>
                      <th>{version.label}</th>
                      <td>
                        <Link to={`${version.path}/intro`}>
                          <DocumentationLabel />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
                {VersionsArchivedList.map(([versionName, versionUrl]) => (
                  <tr key={versionName}>
                    <th>{versionName}</th>
                    <td>
                      <Link to={versionUrl as string}>
                        <DocumentationLabel />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </Layout>
  );
}
