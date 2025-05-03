# ApplicationsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**applicationsCreate**](#applicationscreate) | **POST** /api/applications/ | |
|[**applicationsDestroy**](#applicationsdestroy) | **DELETE** /api/applications/{id}/ | |
|[**applicationsList**](#applicationslist) | **GET** /api/applications/ | |
|[**applicationsPartialUpdate**](#applicationspartialupdate) | **PATCH** /api/applications/{id}/ | |
|[**applicationsRetrieve**](#applicationsretrieve) | **GET** /api/applications/{id}/ | |
|[**applicationsUpdate**](#applicationsupdate) | **PUT** /api/applications/{id}/ | |

# **applicationsCreate**
> Application applicationsCreate(application)


### Example

```typescript
import {
    ApplicationsApi,
    Configuration,
    Application
} from './api';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let application: Application; //

const { status, data } = await apiInstance.applicationsCreate(
    application
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **application** | **Application**|  | |


### Return type

**Application**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicationsDestroy**
> applicationsDestroy()


### Example

```typescript
import {
    ApplicationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let id: number; //A unique integer value identifying this application. (default to undefined)

const { status, data } = await apiInstance.applicationsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this application. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicationsList**
> Array<Application> applicationsList()


### Example

```typescript
import {
    ApplicationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let search: string; //A search term. (optional) (default to undefined)

const { status, data } = await apiInstance.applicationsList(
    ordering,
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **search** | [**string**] | A search term. | (optional) defaults to undefined|


### Return type

**Array<Application>**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicationsPartialUpdate**
> Application applicationsPartialUpdate()


### Example

```typescript
import {
    ApplicationsApi,
    Configuration,
    PatchedApplication
} from './api';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let id: number; //A unique integer value identifying this application. (default to undefined)
let patchedApplication: PatchedApplication; // (optional)

const { status, data } = await apiInstance.applicationsPartialUpdate(
    id,
    patchedApplication
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedApplication** | **PatchedApplication**|  | |
| **id** | [**number**] | A unique integer value identifying this application. | defaults to undefined|


### Return type

**Application**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicationsRetrieve**
> Application applicationsRetrieve()


### Example

```typescript
import {
    ApplicationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let id: number; //A unique integer value identifying this application. (default to undefined)

const { status, data } = await apiInstance.applicationsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this application. | defaults to undefined|


### Return type

**Application**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicationsUpdate**
> Application applicationsUpdate(application)


### Example

```typescript
import {
    ApplicationsApi,
    Configuration,
    Application
} from './api';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let id: number; //A unique integer value identifying this application. (default to undefined)
let application: Application; //

const { status, data } = await apiInstance.applicationsUpdate(
    id,
    application
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **application** | **Application**|  | |
| **id** | [**number**] | A unique integer value identifying this application. | defaults to undefined|


### Return type

**Application**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

