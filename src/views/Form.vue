<template>
  <div class="forms-demo">
    <form>
      <f-input placeholder="Username" required></f-input>
      <f-input placeholder="Password" type="password" required></f-input>
      <f-input placeholder="Repeat password" type="password" required></f-input>
      <f-button type="submit" label="Log in" length="flexible" variant="success"></f-button>
    </form>
    <form class="form-2-cols">
      <div class="flex-row">
        <f-input placeholder="First name" minlength="10" required></f-input>
        <f-input placeholder="Last name" required></f-input>
      </div>
      <div class="flex-row">
        <f-input placeholder="Username" required></f-input>
        <f-input placeholder="Email" type="email" required></f-input>
      </div>
      <div class="flex-row">
        <f-input placeholder="Password" type="password" required></f-input>
        <f-input placeholder="Repeat password" type="password" required></f-input>
      </div>
      <f-button type="submit" label="Sign up" variant="" length="flexible"></f-button>
    </form>
    <!--    second row-->
    <form>
      <f-input placeholder="Username" label="Username" required></f-input>
      <f-input placeholder="Password" label="Password" type="password" required></f-input>
      <f-input placeholder="Repeat password" label="Repeat password" type="password" required></f-input>
      <f-button type="submit" label="Log in" length="flexible" variant="success"></f-button>
    </form>
    <form class="form-2-cols">
      <div class="flex-row">
        <f-input placeholder="First name" label="First name" minlength="10" required></f-input>
        <f-input placeholder="Last name" label="Last name" required></f-input>
      </div>
      <div class="flex-row">
        <f-input placeholder="Username" label="Username" required></f-input>
        <f-input placeholder="Email" type="email" label="Email" required></f-input>
      </div>
      <div class="flex-row">
        <f-input placeholder="Password" type="password" label="Password" required></f-input>
        <f-input placeholder="Repeat password" type="password" label="Repeat password" required></f-input>
      </div>
      <f-button type="submit" label="Sign up" variant="" length="flexible"></f-button>
    </form>
  </div>
</template>

<script setup>
import FInput from "../components/FInput.vue";
import FButton from "../components/FButton.vue";
</script>

<style scoped lang="scss">

.forms-demo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  column-gap: 1rem;
}

form {
  border: 1px solid grey;
  padding: 1rem;
  margin-bottom: 1rem;

  & * {
    margin-bottom: 0.5rem;
  }
}


.form-2-cols {
  display: flex;
  flex-direction: column;
  flex-flow: column wrap;

  .flex-row {
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    column-gap: 0.5rem;

    & * {
      width: 50%;
    }
  }
}

@media only screen and (max-width: 900px) {
  .forms-demo {
    grid-template-columns: 1fr;
  }
}

@media only screen and (max-width: 700px) {
  .form-2-cols {
    .flex-row {
      flex-wrap: wrap;
      & * {
        width: 100%;
      }
    }
  }
}

</style>