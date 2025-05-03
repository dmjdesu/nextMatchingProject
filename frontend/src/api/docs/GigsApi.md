# GigsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**gigsCreate**](#gigscreate) | **POST** /api/gigs/ | |
|[**gigsDestroy**](#gigsdestroy) | **DELETE** /api/gigs/{id}/ | |
|[**gigsList**](#gigslist) | **GET** /api/gigs/ | |
|[**gigsPartialUpdate**](#gigspartialupdate) | **PATCH** /api/gigs/{id}/ | |
|[**gigsRetrieve**](#gigsretrieve) | **GET** /api/gigs/{id}/ | |
|[**gigsUpdate**](#gigsupdate) | **PUT** /api/gigs/{id}/ | |

# **gigsCreate**
> Gig gigsCreate(gig)


### Example

```typescript
import {
    GigsApi,
    Configuration,
    Gig
} from './api';

const configuration = new Configuration();
const apiInstance = new GigsApi(configuration);

let gig: Gig; //

const { status, data } = await apiInstance.gigsCreate(
    gig
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gig** | **Gig**|  | |


### Return type

**Gig**

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

# **gigsDestroy**
> gigsDestroy()


### Example

```typescript
import {
    GigsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GigsApi(configuration);

let id: number; //A unique integer value identifying this gig. (default to undefined)

const { status, data } = await apiInstance.gigsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this gig. | defaults to undefined|


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

# **gigsList**
> Array<Gig> gigsList()


### Example

```typescript
import {
    GigsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GigsApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let search: string; //A search term. (optional) (default to undefined)

const { status, data } = await apiInstance.gigsList(
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

**Array<Gig>**

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

# **gigsPartialUpdate**
> Gig gigsPartialUpdate()


### Example

```typescript
import {
    GigsApi,
    Configuration,
    PatchedGig
} from './api';

const configuration = new Configuration();
const apiInstance = new GigsApi(configuration);

let id: number; //A unique integer value identifying this gig. (default to undefined)
let patchedGig: PatchedGig; // (optional)

const { status, data } = await apiInstance.gigsPartialUpdate(
    id,
    patchedGig
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedGig** | **PatchedGig**|  | |
| **id** | [**number**] | A unique integer value identifying this gig. | defaults to undefined|


### Return type

**Gig**

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

# **gigsRetrieve**
> Gig gigsRetrieve()


### Example

```typescript
import {
    GigsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GigsApi(configuration);

let id: number; //A unique integer value identifying this gig. (default to undefined)

const { status, data } = await apiInstance.gigsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this gig. | defaults to undefined|


### Return type

**Gig**

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

# **gigsUpdate**
> Gig gigsUpdate(gig)


### Example

```typescript
import {
    GigsApi,
    Configuration,
    Gig
} from './api';

const configuration = new Configuration();
const apiInstance = new GigsApi(configuration);

let id: number; //A unique integer value identifying this gig. (default to undefined)
let gig: Gig; //

const { status, data } = await apiInstance.gigsUpdate(
    id,
    gig
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gig** | **Gig**|  | |
| **id** | [**number**] | A unique integer value identifying this gig. | defaults to undefined|


### Return type

**Gig**

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

