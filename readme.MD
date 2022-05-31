# Manifests Example

This example will deploy the [Kubernetes sample guestbook](https://github.com/kubernetes/examples/tree/master/guestbook/) application.
The app will be deployed into the `fleet-manifest-example` namespace.

```yaml
kind: GitRepo
apiVersion: fleet.cattle.io/v1alpha1
metadata:
  name: manifests
  namespace: homelab
spec:
  repo: https://github.com/cryptjoshi/homelab
  - single-cluster/manifests
```
