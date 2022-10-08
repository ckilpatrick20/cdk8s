import { Construct } from 'constructs';
import { IamPolicyMember } from '../imports/iam.cnrm.cloud.google.com';
import { PubSubTopic } from '../imports/pubsub.cnrm.cloud.google.com';
import { StorageBucket } from '../imports/storagebuckets.storage.cnrm.cloud.google.com';
import { StorageNotification } from '../imports/storagenotifications.storage.cnrm.cloud.google.com';

export interface StorageBucketNotificationProps {
  /**
   * Project ID.
   *
   */
  readonly projectID: string;
}

export class StorageBucketNotification extends Construct {
  constructor(scope: Construct, id: string, props: StorageBucketNotificationProps) {
    super(scope, id);

    new StorageNotification(this, 'StorageNotification', {
      metadata: {
        name: 'storagenotification-sample'
      },
      spec: {
        bucketRef: {
          name: props.projectID + '-storagenotification-dep'
        },
        payloadFormat: 'JSON_API_V1',
        topicRef: {
          name: 'storagenotification-dep'
        },
        eventTypes: [
          "OBJECT_ARCHIVE"
        ]
      }
    });

    new IamPolicyMember(this, 'IamPolicyMember', {
      metadata: {
        name: 'storagenotification-dep'
      },
      spec: {
        member: 'serviceAccount:service-' + props.projectID + '@gs-project-accounts.iam.gserviceaccount.com',
        role: "roles/pubsub.publisher",
        resourceRef: {
          kind: 'PubSubTopic',
          name: 'storagenotification-dep'
        }
      }
    });

    new PubSubTopic(this, 'PubSubTopic', {
      metadata: {
        labels: {
          "label-one": "value-one"
        },
        name: 'storagenotification-dep'
      }
    });

    new StorageBucket( this, 'StorageBucket', {
      metadata: {
        name: props.projectID + '-storagenotification-dep'
      }
    });
  }
}
