---
layout: page

ref: form
lang: ru

title: Заявка
---

<div class="row">
  <div class="col-md-6 col-md-offset-3">
    <form action="https://formspree.io/apicrafter@infoculture.ru" method="POST" data-parsley-validate="">
      <div class="form-group row">
        <div class="col-12 col-sm-6 mb-3 mb-sm-0">
        <label for="formName">Ваше имя</label>
        <input type="text" name="full_name" class="form-control" id="formName" placeholder="Введите Ваше имя">
        </div>
        <div class="col-12 col-sm-6 mb-3 mb-sm-0">
          <label for="formEmail">E-mail*</label>
          <input type="email" name="_replyto" class="form-control" id="formEmail" placeholder="Введите Ваш E-mail" required="">
        </div>
      </div>
      <div class="form-group">
        <label for="formPhone">Телефон</label>
        <input type="phone" name="phone" class="form-control" id="formPhone" placeholder="Введите номер Вашего телефона">
      </div>
      <div class="form-group">
        <label for="formOrganization">Организация</label>
        <input type="text" name="full_name" class="form-control" id="formOrganization" placeholder="Введите название Вашей Организации">
      </div>
      <div class="form-group">
        <label for="formMessage">Наименование базы данных*</label>
        <textarea name="message" class="form-control" id="formMessage" rows="3" placeholder="Введите наименование базы данных" required=""></textarea>
      </div>
      <div class="form-group">
        <label for="formPlan">Тариф (при наличии определенности)</label>
        <select name="plan" class="form-control">
          <option disabled selected>Выберите тариф</option>
          <option>Тариф 1</option>
          <option>Тариф 2</option>
          <option>Тариф 3</option>
        </select>
      </div>
      <div class="form-group">
        <label for="formInfo">Дополнительная информация</label>
        <textarea name="info" class="form-control" id="formInfo" rows="3" placeholder="Введите дополнительную информацию"></textarea>
      </div>
      <div class="form-group">
        <p class="warn">Отправляя заявку, я соглашаюсь на обработку персональных данных.</p>
      </div>
      <div class="form-group text-center">
        <input class="btn btn-lg btn-primary" type="submit" value="Отправить заявку">
      </div>

      <input type="hidden" name="_subject" value="Заявка с сайта API Crafter">
      <input type="hidden" name="_next" value="http://apicrafter.ru/thanks">
      <input type="hidden" name="_language" value="ru" />
    </form>
  </div>
</div>