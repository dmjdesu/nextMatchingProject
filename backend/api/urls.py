# api/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import GigViewSet, ApplicationViewSet
from rest_framework_simplejwt.views import (
    TokenObtainPairView, TokenRefreshView
)

router = DefaultRouter()
router.register(r'gigs', GigViewSet)
router.register(r'applications', ApplicationViewSet)

urlpatterns = [
    path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('', include(router.urls)),
]
