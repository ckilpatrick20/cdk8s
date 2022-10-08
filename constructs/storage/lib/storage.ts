import { Construct } from 'constructs';
import { StorageBucket } from '../imports/storagebuckets.storage.cnrm.cloud.google.com';

export interface BucketProps {
  /**
   * The Name to use for this Storage Bucket.
   */
  readonly name: string;

  /**
   * Project ID.
   *
   */
  readonly projectID: string;

  /**
   * Uniform Bucket Level Access.
   *
   * @default true
   */
  readonly uniformBucketLevelAccess?: boolean;

  /**
   * Versioning Enabled.
   *
   * @default true
   */
  readonly versioning?: boolean;
}

export class Storage extends Construct {
  constructor(scope: Construct, id: string, props: BucketProps) {
    super(scope, id);

    const uniformBucketLevelAccess = props.uniformBucketLevelAccess || true;
    const versioning = props.versioning || true;

    new StorageBucket( this, 'storageBucket', {
      metadata: {
        annotations: {
          "cnrm.cloud.google.com/project-id": props.projectID
        },
        name: props.name
      },
      spec: {
        lifecycleRule: [{
          action: {
            type: "Delete"
          },
          condition: {
            age: 7
          }
        }],
        versioning: {
          enabled: versioning
        },
        uniformBucketLevelAccess: uniformBucketLevelAccess
      }
    });
  }
}
