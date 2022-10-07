import { Construct } from 'constructs';
import { App, Chart, ChartProps } from 'cdk8s';
import { StorageBucket } from './imports/storage.cnrm.cloud.google.com';

export class MyChart extends Chart {
  constructor(scope: Construct, id: string, props: ChartProps = { }) {
    super(scope, id, props);

    new StorageBucket( this, 'craigsBucket', {
      metadata: {
        annotations: {
          "cnrm.cloud.google.com/project-id": "sample-project"
        },
        name: 'test-bucket'
      },
      spec: {
        // lifecycleRule: [ { action: Del} ],
        versioning: {
          enabled: true
        },
        uniformBucketLevelAccess: true
      }
    });
  }
}

const app = new App();
new MyChart(app, 'storage');
app.synth();
