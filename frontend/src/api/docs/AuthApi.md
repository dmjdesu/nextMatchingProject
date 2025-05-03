# AuthApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authTokenCreate**](#authtokencreate) | **POST** /api/auth/token/ | |
|[**authTokenRefreshCreate**](#authtokenrefreshcreate) | **POST** /api/auth/token/refresh/ | |

# **authTokenCreate**
> TokenObtainPair authTokenCreate(tokenObtainPair)

Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.

### Example

```typescript
import {
    AuthApi,
    Configuration,
    TokenObtainPair
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let tokenObtainPair: TokenObtainPair; //

const { status, data } = await apiInstance.authTokenCreate(
    tokenObtainPair
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tokenObtainPair** | **TokenObtainPair**|  | |


### Return type

**TokenObtainPair**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authTokenRefreshCreate**
> TokenRefresh authTokenRefreshCreate(tokenRefresh)

Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.

### Example

```typescript
import {
    AuthApi,
    Configuration,
    TokenRefresh
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let tokenRefresh: TokenRefresh; //

const { status, data } = await apiInstance.authTokenRefreshCreate(
    tokenRefresh
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tokenRefresh** | **TokenRefresh**|  | |


### Return type

**TokenRefresh**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

