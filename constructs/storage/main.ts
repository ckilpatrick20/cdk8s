import { Construct } from 'constructs';
import { App, Chart, ChartProps } from 'cdk8s';
import { Storage } from './lib/storage';
import { StorageBucketNotification } from './lib/storage-notification'

export class MyChart extends Chart {
  constructor(scope: Construct, id: string, props: ChartProps = { }) {
    super(scope, id, props);

    new Storage(this, 'hello-world', { name: 'SuperAwesomeBucket', projectID: 'SampleProject'});
    new StorageBucketNotification(this, 'SampleNotification', { projectID: 'SampleProject' });
  }
}

const app = new App();
new MyChart(app, 'storage');
app.synth();
