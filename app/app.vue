<script setup lang="ts">
import { Form, type FormResolverOptions, type FormSubmitEvent } from '@primevue/forms';
import { useToast } from 'primevue/usetoast';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import DatePicker from 'primevue/datepicker';
import Divider from 'primevue/divider';

const toast = useToast();

async function onFormSubmit(form: FormSubmitEvent<Record<string, string>>) {
  toast.add({
    severity: 'success',
    summary: `username: ${form?.states?.primeiroNome?.value}`,
    life: 3000,
  });

  const response = await useFetch('/api/pessoas', {
    method: 'POST',
    body: {
      primeiroNome: form?.states?.primeiroNome?.value,
      ultimoNome: form?.states?.ultimoNome?.value,
      nascimento: form?.states?.nascimento?.value
    }
  })

  await refresh()
}

const resolver = (formResolverOptions: FormResolverOptions): Record<string, string|boolean> => {
  return { username: formResolverOptions.values.username == '1' };
};

const { data, refresh } = await useFetch('/api/pessoas', {
  method: 'GET'
});


async function reload() {
  refresh();
}

</script>

<template>
  <ClientOnly>
    <Toast />
  </ClientOnly>
  <Form class="flex flex-col gap-4 w-full sm:w-56" :resolver="resolver" @submit="(e) => onFormSubmit(e)">
    <div class="flex flex-col gap-1">
      <IftaLabel>
        <label for="primeiroNome">Primeiro Nome</label>
        <InputText name="primeiroNome" type="text" fluid />
      </IftaLabel>

      <IftaLabel>
        <label for="ultimoNome">Ultimo Nome</label>
        <InputText name="ultimoNome" type="text" fluid />
      </IftaLabel>

      <IftaLabel>
        <label for="nascimento">Data de Nascimento</label>
        <DatePicker name="nascimento" date-format="yy-mm-dd" fluid />
      </IftaLabel>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
  </Form>
  <Divider />
  <Button label="recarregar" icon="pi pi-refresh" icon-pos="bottom" @click="reload" />
  <Divider />
  <DataTable :value="data" table-style="min-width: 50rem">
    <Column field="primeiroNome" header="Primeiro Nome"/>
    <Column field="ultimoNome" header="Ultimo Nome"/>
    <Column field="nascimento" header="Data nascimento"/>
  </DataTable>
</template>
