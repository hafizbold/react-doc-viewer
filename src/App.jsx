import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';
import './App.css';

const App = () => {
  const docs = [
    { fileType: "pptx", uri: "https://approvals-dev-files.s3.amazonaws.com/clients/clients/0496b9fb-865d-463d-a165-4a15588c55f6/projects/40d46058-5d0a-49b1-9515-e7572c8082d3/slidelists/e63a2798986b4b55b9559add334fd881/list_e63a2798986b4b55b9559add334fd881_v11.pptx", fileName: "Demo Document " },
  ];

  return <DocViewer pluginRenderers={DocViewerRenderers}
 documents={docs} />;
};

export default App
