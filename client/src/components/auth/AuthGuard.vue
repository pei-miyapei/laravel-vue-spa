<script setup lang="ts">
import PKCE from 'js-pkce';
import { injectAuth } from '../../store/authContext';

const auth = injectAuth();

if (!auth.hasToken()) {
  const pkce = new PKCE({
    client_id: '1',
    redirect_uri: location.origin + '/auth/callback',
    authorization_endpoint: 'http://localhost/server/oauth/authorize',
    requested_scopes: '*',
  });
  location.replace(pkce.authorizeUrl());
}
</script>

<template v-if="auth.hasToken()">
  <slot />
</template>
