// generated by cdk8s
import { ApiObject, ApiObjectMetadata, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';


/**
 *
 *
 * @schema StorageBucket
 */
export class StorageBucket extends ApiObject {
  /**
   * Returns the apiVersion and kind for "StorageBucket"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'storage.cnrm.cloud.google.com/v1beta1',
    kind: 'StorageBucket',
  }

  /**
   * Renders a Kubernetes manifest for "StorageBucket".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: StorageBucketProps = {}): any {
    return {
      ...StorageBucket.GVK,
      ...toJson_StorageBucketProps(props),
    };
  }

  /**
   * Defines a "StorageBucket" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: StorageBucketProps = {}) {
    super(scope, id, {
      ...StorageBucket.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...StorageBucket.GVK,
      ...toJson_StorageBucketProps(resolved),
    };
  }
}

/**
 * @schema StorageBucket
 */
export interface StorageBucketProps {
  /**
   * @schema StorageBucket#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema StorageBucket#spec
   */
  readonly spec?: StorageBucketSpec;

}

/**
 * Converts an object of type 'StorageBucketProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageBucketProps(obj: StorageBucketProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_StorageBucketSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageBucketSpec
 */
export interface StorageBucketSpec {
  /**
   * DEPRECATED. Please use the `uniformBucketLevelAccess` field as this field has been renamed by Google. The `uniformBucketLevelAccess` field will supersede this field.
   * Enables Bucket PolicyOnly access to a bucket.
   *
   * @schema StorageBucketSpec#bucketPolicyOnly
   */
  readonly bucketPolicyOnly?: boolean;

  /**
   * The bucket's Cross-Origin Resource Sharing (CORS) configuration.
   *
   * @schema StorageBucketSpec#cors
   */
  readonly cors?: StorageBucketSpecCors[];

  /**
   * Whether or not to automatically apply an eventBasedHold to new objects added to the bucket.
   *
   * @schema StorageBucketSpec#defaultEventBasedHold
   */
  readonly defaultEventBasedHold?: boolean;

  /**
   * The bucket's encryption configuration.
   *
   * @schema StorageBucketSpec#encryption
   */
  readonly encryption?: StorageBucketSpecEncryption;

  /**
   * The bucket's Lifecycle Rules configuration.
   *
   * @schema StorageBucketSpec#lifecycleRule
   */
  readonly lifecycleRule?: StorageBucketSpecLifecycleRule[];

  /**
   * Immutable. The Google Cloud Storage location.
   *
   * @schema StorageBucketSpec#location
   */
  readonly location?: string;

  /**
   * The bucket's Access & Storage Logs configuration.
   *
   * @schema StorageBucketSpec#logging
   */
  readonly logging?: StorageBucketSpecLogging;

  /**
   * Prevents public access to a bucket.
   *
   * @schema StorageBucketSpec#publicAccessPrevention
   */
  readonly publicAccessPrevention?: string;

  /**
   * Enables Requester Pays on a storage bucket.
   *
   * @schema StorageBucketSpec#requesterPays
   */
  readonly requesterPays?: boolean;

  /**
   * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
   *
   * @schema StorageBucketSpec#resourceID
   */
  readonly resourceId?: string;

  /**
   * Configuration of the bucket's data retention policy for how long objects in the bucket should be retained.
   *
   * @schema StorageBucketSpec#retentionPolicy
   */
  readonly retentionPolicy?: StorageBucketSpecRetentionPolicy;

  /**
   * The Storage Class of the new bucket. Supported values include: STANDARD, MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.
   *
   * @schema StorageBucketSpec#storageClass
   */
  readonly storageClass?: string;

  /**
   * Enables uniform bucket-level access on a bucket.
   *
   * @schema StorageBucketSpec#uniformBucketLevelAccess
   */
  readonly uniformBucketLevelAccess?: boolean;

  /**
   * The bucket's Versioning configuration.
   *
   * @schema StorageBucketSpec#versioning
   */
  readonly versioning?: StorageBucketSpecVersioning;

  /**
   * Configuration if the bucket acts as a website.
   *
   * @schema StorageBucketSpec#website
   */
  readonly website?: StorageBucketSpecWebsite;

}

/**
 * Converts an object of type 'StorageBucketSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageBucketSpec(obj: StorageBucketSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketPolicyOnly': obj.bucketPolicyOnly,
    'cors': obj.cors?.map(y => toJson_StorageBucketSpecCors(y)),
    'defaultEventBasedHold': obj.defaultEventBasedHold,
    'encryption': toJson_StorageBucketSpecEncryption(obj.encryption),
    'lifecycleRule': obj.lifecycleRule?.map(y => toJson_StorageBucketSpecLifecycleRule(y)),
    'location': obj.location,
    'logging': toJson_StorageBucketSpecLogging(obj.logging),
    'publicAccessPrevention': obj.publicAccessPrevention,
    'requesterPays': obj.requesterPays,
    'resourceID': obj.resourceId,
    'retentionPolicy': toJson_StorageBucketSpecRetentionPolicy(obj.retentionPolicy),
    'storageClass': obj.storageClass,
    'uniformBucketLevelAccess': obj.uniformBucketLevelAccess,
    'versioning': toJson_StorageBucketSpecVersioning(obj.versioning),
    'website': toJson_StorageBucketSpecWebsite(obj.website),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageBucketSpecCors
 */
export interface StorageBucketSpecCors {
  /**
   * The value, in seconds, to return in the Access-Control-Max-Age header used in preflight responses.
   *
   * @schema StorageBucketSpecCors#maxAgeSeconds
   */
  readonly maxAgeSeconds?: number;

  /**
   * The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method".
   *
   * @schema StorageBucketSpecCors#method
   */
  readonly method?: string[];

  /**
   * The list of Origins eligible to receive CORS response headers. Note: "*" is permitted in the list of origins, and means "any Origin".
   *
   * @schema StorageBucketSpecCors#origin
   */
  readonly origin?: string[];

  /**
   * The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains.
   *
   * @schema StorageBucketSpecCors#responseHeader
   */
  readonly responseHeader?: string[];

}

/**
 * Converts an object of type 'StorageBucketSpecCors' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageBucketSpecCors(obj: StorageBucketSpecCors | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxAgeSeconds': obj.maxAgeSeconds,
    'method': obj.method?.map(y => y),
    'origin': obj.origin?.map(y => y),
    'responseHeader': obj.responseHeader?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The bucket's encryption configuration.
 *
 * @schema StorageBucketSpecEncryption
 */
export interface StorageBucketSpecEncryption {
  /**
   * @schema StorageBucketSpecEncryption#kmsKeyRef
   */
  readonly kmsKeyRef: StorageBucketSpecEncryptionKmsKeyRef;

}

/**
 * Converts an object of type 'StorageBucketSpecEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageBucketSpecEncryption(obj: StorageBucketSpecEncryption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'kmsKeyRef': toJson_StorageBucketSpecEncryptionKmsKeyRef(obj.kmsKeyRef),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageBucketSpecLifecycleRule
 */
export interface StorageBucketSpecLifecycleRule {
  /**
   * The Lifecycle Rule's action configuration. A single block of this type is supported.
   *
   * @schema StorageBucketSpecLifecycleRule#action
   */
  readonly action: StorageBucketSpecLifecycleRuleAction;

  /**
   * The Lifecycle Rule's condition configuration.
   *
   * @schema StorageBucketSpecLifecycleRule#condition
   */
  readonly condition: StorageBucketSpecLifecycleRuleCondition;

}

/**
 * Converts an object of type 'StorageBucketSpecLifecycleRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageBucketSpecLifecycleRule(obj: StorageBucketSpecLifecycleRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'action': toJson_StorageBucketSpecLifecycleRuleAction(obj.action),
    'condition': toJson_StorageBucketSpecLifecycleRuleCondition(obj.condition),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The bucket's Access & Storage Logs configuration.
 *
 * @schema StorageBucketSpecLogging
 */
export interface StorageBucketSpecLogging {
  /**
   * The bucket that will receive log objects.
   *
   * @schema StorageBucketSpecLogging#logBucket
   */
  readonly logBucket: string;

  /**
   * The object prefix for log objects. If it's not provided, by default Google Cloud Storage sets this to this bucket's name.
   *
   * @schema StorageBucketSpecLogging#logObjectPrefix
   */
  readonly logObjectPrefix?: string;

}

/**
 * Converts an object of type 'StorageBucketSpecLogging' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageBucketSpecLogging(obj: StorageBucketSpecLogging | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'logBucket': obj.logBucket,
    'logObjectPrefix': obj.logObjectPrefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configuration of the bucket's data retention policy for how long objects in the bucket should be retained.
 *
 * @schema StorageBucketSpecRetentionPolicy
 */
export interface StorageBucketSpecRetentionPolicy {
  /**
   * If set to true, the bucket will be locked and permanently restrict edits to the bucket's retention policy.  Caution: Locking a bucket is an irreversible action.
   *
   * @schema StorageBucketSpecRetentionPolicy#isLocked
   */
  readonly isLocked?: boolean;

  /**
   * The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived. The value must be less than 3,155,760,000 seconds.
   *
   * @schema StorageBucketSpecRetentionPolicy#retentionPeriod
   */
  readonly retentionPeriod: number;

}

/**
 * Converts an object of type 'StorageBucketSpecRetentionPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageBucketSpecRetentionPolicy(obj: StorageBucketSpecRetentionPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'isLocked': obj.isLocked,
    'retentionPeriod': obj.retentionPeriod,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The bucket's Versioning configuration.
 *
 * @schema StorageBucketSpecVersioning
 */
export interface StorageBucketSpecVersioning {
  /**
   * While set to true, versioning is fully enabled for this bucket.
   *
   * @schema StorageBucketSpecVersioning#enabled
   */
  readonly enabled: boolean;

}

/**
 * Converts an object of type 'StorageBucketSpecVersioning' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageBucketSpecVersioning(obj: StorageBucketSpecVersioning | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Configuration if the bucket acts as a website.
 *
 * @schema StorageBucketSpecWebsite
 */
export interface StorageBucketSpecWebsite {
  /**
   * Behaves as the bucket's directory index where missing objects are treated as potential directories.
   *
   * @schema StorageBucketSpecWebsite#mainPageSuffix
   */
  readonly mainPageSuffix?: string;

  /**
   * The custom object to return when a requested resource is not found.
   *
   * @schema StorageBucketSpecWebsite#notFoundPage
   */
  readonly notFoundPage?: string;

}

/**
 * Converts an object of type 'StorageBucketSpecWebsite' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageBucketSpecWebsite(obj: StorageBucketSpecWebsite | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'mainPageSuffix': obj.mainPageSuffix,
    'notFoundPage': obj.notFoundPage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageBucketSpecEncryptionKmsKeyRef
 */
export interface StorageBucketSpecEncryptionKmsKeyRef {
  /**
   * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
   *
   * @schema StorageBucketSpecEncryptionKmsKeyRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema StorageBucketSpecEncryptionKmsKeyRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema StorageBucketSpecEncryptionKmsKeyRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'StorageBucketSpecEncryptionKmsKeyRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageBucketSpecEncryptionKmsKeyRef(obj: StorageBucketSpecEncryptionKmsKeyRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'external': obj.external,
    'name': obj.name,
    'namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The Lifecycle Rule's action configuration. A single block of this type is supported.
 *
 * @schema StorageBucketSpecLifecycleRuleAction
 */
export interface StorageBucketSpecLifecycleRuleAction {
  /**
   * The target Storage Class of objects affected by this Lifecycle Rule. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE.
   *
   * @schema StorageBucketSpecLifecycleRuleAction#storageClass
   */
  readonly storageClass?: string;

  /**
   * The type of the action of this Lifecycle Rule. Supported values include: Delete and SetStorageClass.
   *
   * @schema StorageBucketSpecLifecycleRuleAction#type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'StorageBucketSpecLifecycleRuleAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageBucketSpecLifecycleRuleAction(obj: StorageBucketSpecLifecycleRuleAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'storageClass': obj.storageClass,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The Lifecycle Rule's condition configuration.
 *
 * @schema StorageBucketSpecLifecycleRuleCondition
 */
export interface StorageBucketSpecLifecycleRuleCondition {
  /**
   * Minimum age of an object in days to satisfy this condition.
   *
   * @schema StorageBucketSpecLifecycleRuleCondition#age
   */
  readonly age?: number;

  /**
   * Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.
   *
   * @schema StorageBucketSpecLifecycleRuleCondition#createdBefore
   */
  readonly createdBefore?: string;

  /**
   * Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.
   *
   * @schema StorageBucketSpecLifecycleRuleCondition#customTimeBefore
   */
  readonly customTimeBefore?: string;

  /**
   * Number of days elapsed since the user-specified timestamp set on an object.
   *
   * @schema StorageBucketSpecLifecycleRuleCondition#daysSinceCustomTime
   */
  readonly daysSinceCustomTime?: number;

  /**
   * Number of days elapsed since the noncurrent timestamp of an object. This
   * condition is relevant only for versioned objects.
   *
   * @schema StorageBucketSpecLifecycleRuleCondition#daysSinceNoncurrentTime
   */
  readonly daysSinceNoncurrentTime?: number;

  /**
   * One or more matching name prefixes to satisfy this condition.
   *
   * @schema StorageBucketSpecLifecycleRuleCondition#matchesPrefix
   */
  readonly matchesPrefix?: string[];

  /**
   * Storage Class of objects to satisfy this condition. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, DURABLE_REDUCED_AVAILABILITY.
   *
   * @schema StorageBucketSpecLifecycleRuleCondition#matchesStorageClass
   */
  readonly matchesStorageClass?: string[];

  /**
   * One or more matching name suffixes to satisfy this condition.
   *
   * @schema StorageBucketSpecLifecycleRuleCondition#matchesSuffix
   */
  readonly matchesSuffix?: string[];

  /**
   * Creation date of an object in RFC 3339 (e.g. 2017-06-13) to satisfy this condition.
   *
   * @schema StorageBucketSpecLifecycleRuleCondition#noncurrentTimeBefore
   */
  readonly noncurrentTimeBefore?: string;

  /**
   * Relevant only for versioned objects. The number of newer versions of an object to satisfy this condition.
   *
   * @schema StorageBucketSpecLifecycleRuleCondition#numNewerVersions
   */
  readonly numNewerVersions?: number;

  /**
   * Match to live and/or archived objects. Unversioned buckets have only live objects. Supported values include: "LIVE", "ARCHIVED", "ANY".
   *
   * @schema StorageBucketSpecLifecycleRuleCondition#withState
   */
  readonly withState?: string;

}

/**
 * Converts an object of type 'StorageBucketSpecLifecycleRuleCondition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageBucketSpecLifecycleRuleCondition(obj: StorageBucketSpecLifecycleRuleCondition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'age': obj.age,
    'createdBefore': obj.createdBefore,
    'customTimeBefore': obj.customTimeBefore,
    'daysSinceCustomTime': obj.daysSinceCustomTime,
    'daysSinceNoncurrentTime': obj.daysSinceNoncurrentTime,
    'matchesPrefix': obj.matchesPrefix?.map(y => y),
    'matchesStorageClass': obj.matchesStorageClass?.map(y => y),
    'matchesSuffix': obj.matchesSuffix?.map(y => y),
    'noncurrentTimeBefore': obj.noncurrentTimeBefore,
    'numNewerVersions': obj.numNewerVersions,
    'withState': obj.withState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
